import React from 'react'

const Button = ({ button: { category, name, icon }, filterProduct }) => {
  return (
    <button
      productcategory={category}
      onClick={() => filterProduct(category)}
      className="flex fles-row items-center justify-center p-3 gap-2 bg-transparent text-indigo-600 font-semibold border border-indigo-600 rounded hover:bg-gradient-to-tr from-indigo-700 to-indigo-500 hover:text-white hover:border-transparent transition ease-in duration-200 transform hover:-translate-y-1 active:translate-y-0"
    >
      <div>{icon}</div>
      <div>{name}</div>
    </button>
    // <button
    //   rel="noopener noreferrer"
    //   className="category-select background-button"
    //   productcategory={category}
    //   onClick={() => filterProduct(category)}
    // >
    //   <span>{icon}</span>
    //   <span>{name}</span>
    // </button>
  )
}

export default Button
