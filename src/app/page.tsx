import Image from "next/image";
import Link from 'next/link'
import Cat from 'public/static/sillyahcat.png'

export default function Home() {
    return (
            <Image
            src={'/static/sillyahcat.png'}
            alt="Picture of the author"
            width={1000}
            height={1000}
            />
);
}
