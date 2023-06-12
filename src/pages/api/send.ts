import type { APIRoute } from 'astro';

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

  return new Response(JSON.stringify({ message: 'success' }), { status: 200 });
};
