import Button from './Button'
import {
  All,
  ResumeBuilder,
  Hacker,
  AI,
  Movies,
  Extensions,
  Tools,
  Jobs,
} from './Icons'
import LazyLoad from 'react-lazyload'

const ButtonLinks = [
  {
    id: 1,
    name: 'All',
    category: 'all',
    icon: <All />,
  },
  {
    id: 2,
    name: 'Remote Jobs',
    category: 'remote',
    icon: <Jobs />,
  },
  {
    id: 3,
    name: 'Resume Builder',
    category: 'resume',
    icon: <ResumeBuilder />,
  },
  {
    id: 4,
    name: 'AI',
    category: 'ai',
    icon: <AI />,
  },
  {
    id: 5,
    name: 'Ethical Hacking',
    category: 'ethical',
    icon: <Hacker />,
  },
  {
    id: 6,
    name: 'Movies | Series',
    category: 'movies',
    icon: <Movies />,
  },
  {
    id: 7,
    name: 'Useful Extensions',
    category: 'extensions',
    icon: <Extensions />,
  },
  {
    id: 8,
    name: 'Useful Tools',
    category: 'tools',
    icon: <Tools />,
  },
]

const Card = ({ filterProduct, filteredProducts, length, category }) => {
  return (
    <div className="App">
      <header>
        <div className="flex gap-2 justify-center p-6">
          {ButtonLinks.map((buttonLink) => (
            <Button
              key={buttonLink.id}
              button={buttonLink}
              filterProduct={filterProduct}
            />
          ))}
        </div>
      </header>
      <main>
        <section>
          <div className="">
            {length == 0 ? (
              <p className="no-results">
                Sorry, no tools available for this search term.
              </p>
            ) : (
              <div className="flex flex-wrap justify-center">
                {filteredProducts.map((product, index) => {
                  return category === 'all' || category === product.category ? (
                    <div
                      key={index}
                      className="bg-gray-100  px-4 py-6 min-h-64 lg:min-h-64 space-y-6 sm:space-y-0 sm:gap-4  hover:border-transparent transition ease-in duration-200 transform hover:-translate-y-3 active:translate-y-0"
                    >
                      <div className="h-96 p-6 bg-gradient-to-tr from-indigo-800 to-indigo-500 rounded-md flex items-center">
                        <div className="flex flex-col w-80 text-center items-center">
                          <div className="h-12 w-12">
                            <img src={product.image} />
                          </div>
                          <h2 className="text-white text-4xl pt-3">
                            {product.productName}
                          </h2>
                          <p className="text-indigo-100 mt-4 capitalize font-thin tracking-wider leading-7">
                            {product.description}
                          </p>

                          <a
                            href={product.link}
                            className="uppercase inline-block mt-8 text-sm bg-white py-2 px-4 rounded font-semibold hover:bg-indigo-100"
                          >
                            Visit website
                          </a>
                        </div>
                      </div>
                    </div>
                  ) : null
                })}
              </div>
            )}
          </div>
        </section>
      </main>
    </div>
  )
}
export default Card
