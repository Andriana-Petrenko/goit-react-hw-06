import css from "./SearchBox.module.css"
const SearchBox = ({filter,onChangeFilter}) => {
    return (
        <label className={css.filter}>Find contacts by name
            <input type="text" value={filter} onChange={onChangeFilter}/></label> 
  )
}

export default SearchBox