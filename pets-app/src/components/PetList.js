import {dog, cat} from "../data/petsData"

function PetList(){
    return (
        <ul className="pet-list">
            <li className="pet">
                <img src={dog.image} alt={dog.name}/>
                <h4>{dog.name}</h4>
            </li>
            <li className="pet">
                <img src={cat.image} alt={cat.name}/>
                <h4>{cat.name}</h4>
            </li>
        </ul>
    )
}

export default PetList