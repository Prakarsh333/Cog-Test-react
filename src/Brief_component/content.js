export const Content = () => {
    return (
      <div className="px-4 py-16 mx-auto sm:max-w-xl md:max-w-full lg:max-w-screen-xl md:px-24 lg:px-8 lg:py-20">
        <div className="p-8 rounded shadow-xl sm:p-16">
          <div className="flex flex-col lg:flex-row">
            <div className="mb-6 lg:mb-0 lg:w-1/2 lg:pr-5">
              <h2 className="font-sans text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl sm:leading-none">
                Working Memory and
                <br className="hidden md:block" />
                N-back test{' '}
                <span className="inline-block text-deep-purple-accent-400">
                  
                </span>
              </h2>
            </div>
            <div className="lg:w-1/2">
              <p className="mb-4 text-base text-gray-700">
              The N-back test is a commonly used task to assess working memory. In this task, participants are presented with a sequence of stimuli, such as letters or numbers, and are required to indicate when the current stimulus matches the one presented N steps back in the sequence. For example, in a 2-back task, participants would indicate when the current stimulus matches the one presented two steps back in the sequence.

              </p>
              <a
                href="https://pubmed.ncbi.nlm.nih.gov/17470009/"
                aria-label=""
                className="inline-flex items-center font-semibold transition-colors duration-200 text-deep-purple-accent-400 hover:text-deep-purple-800"
              >
                Learn more
              </a>
            </div>
          </div>
        </div>
      </div>
    );
  };

  export default Content;