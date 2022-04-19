import { Context } from "netlify:edge";

export default async (request: Request, context: Context) => {

  const joke = await fetch("https://icanhazdadjoke.com/", {
    "headers": {
      "Accept": "application/json",
      "Cache-Control": "max-age=604800"
    }
  });
  const jsonData = await joke.json();
  return context.json(jsonData);
};
