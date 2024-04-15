export async function POST(req) {
  try {
    const { name, email, contact, password } = await req.json();
    console.log("Name", name);
    console.log("email", email);
    console.log("contact", contact);
    console.log("password", password);
    return NextResponse.json({ message: "User Registered" }, { status: 201 });
  } catch (error) {
    return NextResponse.json(
      { message: "An error while registering user" },
      { status: 500 }
    );
  }
}
