import { useEffect, useState } from "react"

export default function TableOfContent() {
  // Sommaire
  const [tabHeading, setTabHeading] = useState()
  const [headings, setHeadings] = useState()

    const heading = document.querySelectorAll('h2');

    const tab = heading.forEach((element, index) => {
      element.setAttribute('id',`heading${index}`)
    })

    setTabHeading(tab)

  useEffect(() => {
    const elements = Array.from(document.querySelectorAll("h1, h2, h3, h4")).map((element) => ({
      id: element.id,
      text: element.innerText,
      level: Number(element.nodeName.charAt(1))
    }))
    console.log(elements)
    setHeadings(elements)
  },[])


  return (
    <nav className="sticky top-20">
      <ul>
          {headings && headings.map(heading => (
            <li key={heading.id}>
              <a href={`#${heading.id}`} 
                onClick={(e) => {
                  e.preventDefault()
                  // document.querySelector(`#${heading.id}`).scrollIntoView({ behavior: "smooth" })
                }}>
                {heading.text}
              </a>
            </li>
          ))}
      </ul>
    </nav>
  )
}
