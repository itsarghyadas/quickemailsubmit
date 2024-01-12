export const dynamic = "force-dynamic";

export async function POST(request: Request) {
  const bodyData = await request.json();
  const { useremail } = bodyData;
  console.log("useremail:", useremail);

  return Response.json(
    { emailSubmitted: true },
    {
      headers: {
        "Access-Control-Allow-Origin": "*",
        "Access-Control-Allow-Methods": "GET, POST, PUT, DELETE, OPTIONS",
        "Access-Control-Allow-Headers": "Content-Type, Authorization",
      },
    }
  );
}
