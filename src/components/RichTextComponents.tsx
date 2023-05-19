import Image from "next/image"
import Link from "next/link"
import urlFor from "@/lib/urlFor"

type childrenProp = {
    children: React.ReactNode,
    value?: {
        href: string,
    }
}


const RichTextComponents = {
    h1: ({children} : childrenProp) => <h1 className="text-5xl py-10 font-bold">{children}</h1>,
    h2: ({children} : childrenProp) => <h2 className="text-4xl py-10 font-bold">{children}</h2>,
    h3: ({children} : childrenProp) => <h3 className="text-3xl py-10 font-bold">{children}</h3>,
    h4: ({children} : childrenProp) => <h4 className="text-2xl py-10 font-bold">{children}</h4>,
    h5: ({children} : childrenProp) => <h5 className="text-xl py-10 font-bold">{children}</h5>,
    h6: ({children} : childrenProp) => <h6 className="text-lg py-10 font-bold">{children}</h6>,
    image: (props : any) => {
        return (
            <div className="relative w-full h-96 m-10 mx-auto">
                { <Image 
                    className=" object-contain"
                    src={urlFor(props.asset._ref).url()}
                    alt="Blog Post Image"
                    fill
                /> }
            </div>
        )
    },
    ul: ({children} : childrenProp) => {
        return (
            <ul className="ml-10 py-5 list-disc space-y-5">{children}</ul>
        )
    },
    ol: ({children} : childrenProp) => {
        return (
            <ol className="mt-lg list-decimal">{children}</ol>
        )
    },
    blockquote: ({children} : childrenProp) => (
        <blockquote className="border-l-primary-color border-l-4 pl-5 py-5 my-5">
            {children}
        </blockquote>
    ),
    link: ({children, value} : childrenProp) => {
        const rel = !value?.href.startsWith("/")
            ? "noopener noreferrer"
            : undefined;
        <Link 
            className="underline decoration-primary-color hover:decoration-black"
            href={value?.href || ''}
            rel={rel}>
            {children}
        </Link>
    },

  }

export default RichTextComponents