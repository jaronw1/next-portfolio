import styles from "@/styles/About.module.css"
import { useState } from "react"
import Image from "next/image"


export default function About() {
    const [fontSize, setFontSize] = useState(3)
    return (
        <div>
            <style jsx>{`
                .bigHeader {
                    font-size: ${fontSize}rem;
                }
            `}</style>
            <h1 className="bigHeader">About Me</h1>

            <button onClick={() => setFontSize(fontSize + 1)}>++</button>

            <p className={styles.greenText}>I am a super cool software engineer. I make all kinds of neat project with the code</p>

            <Image 
                src=""
                alt="next logo"
                width={450}
                height={450}
            />
        </div>
    )
}