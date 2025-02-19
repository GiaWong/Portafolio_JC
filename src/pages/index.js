import Head from "next/head";
import Image from "next/image";
import { Geist, Geist_Mono } from "next/font/google";
import styles from "@/styles/Home.module.css";


export default function Home() {
  return (
    <div>
      <h1>Firebase API Key:</h1>
      <p>{process.env.NEXT_PUBLIC_FIREBASE_API_KEY}</p>
    </div>
  );
}