import React from 'react';
import {useAppSelector} from "../hooks/useAppSelector";

const FavouritesPages = () => {
    const {favourites} = useAppSelector(state => state.github)

    if (favourites.length === 0) return <p className="text-center">No items.</p>

    return (
        <div className="flex justify-center pt-10 mx-auto h-screen w-screen">
            <ul className="list-none">
                {favourites.map(url => (
                    <li key={url}>
                        <a target="_blank" href={url}>{url}</a>
                    </li>
                ))}
            </ul>
        </div>

    );
};

export default FavouritesPages;
