import type { APIRoute } from 'astro';
import { WebClient } from '@slack/web-api';

export const post: APIRoute = async ({ request }) => {
  const data = await request.formData();
  const email = data.get('email');
  const message = data.get('message');
  if (!email || !message)
    return new Response(
      JSON.stringify({ message: 'missing required fields' }),
      { status: 400 }
    );

  //lets use slack instead

  try {
    const web = new WebClient(import.meta.env.BOT_USER_TOKEN);
    const res = await web.chat.postMessage({
      channel: 'portfolio-contact-form',
      text: `====================\n📥 *NEW MESSAGE*\n*email*: ${email}\n*message*: \n>${message}\n====================`,
    });
    console.log(res);
    return new Response(JSON.stringify({ message: 'success' }), {
      status: 200,
    });
  } catch (err) {
    return new Response(JSON.stringify({ error: err }), {
      status: 500,
    });
  }
};
