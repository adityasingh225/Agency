import { NextResponse } from 'next/server';
import connectDB from '@/lib/mongodb';
import Contact from '@/models/Contact';

export async function POST(req: Request) {
  try {
    const body = await req.json();
    await connectDB();
    
    const contact = await Contact.create(body);
    
    return NextResponse.json(
      { message: 'Message sent successfully', contact },
      { status: 201 }
    );
  } catch (error: any) {
    return NextResponse.json(
      { 
        message: 'Error sending message',
        error: error.message 
      },
      { status: 500 }
    );
  }
} 