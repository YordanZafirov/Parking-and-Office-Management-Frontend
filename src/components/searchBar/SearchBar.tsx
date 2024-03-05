import { ChangeEvent } from 'react';
import { SearchBarWrapper } from './SearchBar.styles';
import { SearchBarProps } from './SearchBar.static';

const SearchBar: React.FC<SearchBarProps> = ({ placeholder, onSearch }) => {
    const handleInputChange = (e: ChangeEvent<HTMLInputElement>) => {
        const query = e.target.value;
        onSearch(query);
    };

    return (
        <SearchBarWrapper>
            <input type="text" placeholder={placeholder} onChange={handleInputChange} />
        </SearchBarWrapper>
    );
};

export default SearchBar;
