interface ENV {
  BASIC_AUTH_IS_ENABLED: string;
  BASIC_AUTH_USERNAME: string;
  BASIC_AUTH_PASSWORD: string;
}

export const onRequest: PagesFunction<ENV> = async (context) => {
  if (context.env.BASIC_AUTH_IS_ENABLED !== "1") {
    return await context.next();
  }

  const authorizationHeader = context.request.headers.get("Authorization");

  if (authorizationHeader) {
    const authValue = authorizationHeader.split(" ")[1];
    const [user, password] = atob(authValue).split(":");

    if (
      user === context.env.BASIC_AUTH_USERNAME &&
      password === context.env.BASIC_AUTH_PASSWORD
    ) {
      return await context.next();
    }
  }

  return new Response("Auth Required.", {
    status: 401,
    headers: {
      "WWW-authenticate": 'Basic realm="Secure Area"',
    },
  });
};
