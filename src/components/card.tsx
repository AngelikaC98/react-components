

import "./card.css"

export const Card = () => {
    const nextPage = "https://www.americanhippotherapyassociation.org/what-is-hippotherapy"
    return (
        <div className="border">
            <img className="image" src="https://github.com/AngelikaC98/react-components/blob/main/public/hippotherapy.jpg?raw=true" />
            <h2 className="text"> Title</h2>
            <p className="paragraph"> Here will be some text about card.</p>
            <a href={nextPage}>
                <button className="button">
                    Read more
                </button>
            </a>
        </div>
    )
}
