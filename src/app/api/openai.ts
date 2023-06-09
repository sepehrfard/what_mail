import { Configuration, OpenAIApi } from "openai";

const configuration = new Configuration({
  apiKey: process.env.OPENAI_API_KEY,
});

const openai = new OpenAIApi(configuration);

export const createChatCompletion = async (input) => {
  const completion = await openai.createChatCompletion({
    model: "gpt-3.5-turbo",
    messages: [
      {role: "user", content: input},
      {role: "system", content: "explain the document in simple terms"}
    ],
  });

  return completion.data.choices[0].message;
}
