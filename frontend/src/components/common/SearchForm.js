import React from 'react';

const SearchForm = ({search}) => {
    console.log(search);
    console.log(typeof search);

    const handleSubmit = evt => {
        evt.preventDefault();
        console.log("hi");
        search("berger");
    }

    return (
        <div>
            <form action="" onSubmit={handleSubmit}>
                <input type="text" />
                <button>Search</button>
            </form>
        </div>
    )
}

export default SearchForm;