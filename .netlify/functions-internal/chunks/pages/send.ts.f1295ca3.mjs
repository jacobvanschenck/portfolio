import { WebClient } from '@slack/web-api';

const post = async ({ request }) => {
  const data = await request.formData();
  const email = data.get("email");
  const message = data.get("message");
  if (!email || !message)
    return new Response(
      JSON.stringify({ message: "missing required fields" }),
      { status: 400 }
    );
  try {
    const web = new WebClient(
      "xoxb-3653953883314-3667667761921-D6OEEcFwH9IOxvpPDv1gY8lN"
    );
    const res = await web.chat.postMessage({
      channel: "portfolio-contact-form",
      text: `====================
📥 *NEW MESSAGE*
*email*: ${email}
*message*: 
>${message}
====================`
    });
    console.log(res);
    return new Response(JSON.stringify({ message: "success" }), {
      status: 200
    });
  } catch (err) {
    return new Response(JSON.stringify({ error: err }), {
      status: 500
    });
  }
};

export { post };
