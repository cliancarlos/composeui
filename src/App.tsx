import { Box } from './components/Box';

export default function App(): any {
  return (
    <>
      <Box margin="">
        <Box.Center all=" h-32 w-32 bg-blue-500 text-white">
          <p>Center</p>
        </Box.Center>

        <Box.Around all="h-32 w-32  bg-red-500 text-white">
          <p>Around</p>
          <p>Around</p>
        </Box.Around>

        <Box.Evenly all="h-32 w-32  bg-green-500 text-white">
          <p>Evenly</p>
          <p>Evenly</p>
        </Box.Evenly>

        <Box.Stack all="h-32 w-32  bg-yellow-500 text-white">
          <p>Stack</p>
          <p>Stack</p>
        </Box.Stack>

        <Box.NoWrap all="h-auto w-32  bg-pink-500 text-white">
          <p>NoWrap</p>
          <p>NoWrap</p>
          <p>NoWrap</p>
          <p>NoWrap</p>
        </Box.NoWrap>

        <Box.Grow all="h-32 w-32  bg-orange-500 text-white">
          <p>Grow</p>
          <p>Grow</p>
        </Box.Grow>

        <Box.Shrink all="h-32 w-32  bg-teal-500 text-white">
          <p>Shrink</p>
          <p>Shrink</p>
        </Box.Shrink>

        <Box.Between all="h-32 w-64  bg-teal-500 text-white">
          <div>Item 1</div>
          <div>Item 2</div>
          <div>Item 3</div>
        </Box.Between>
      </Box>

      <div id="accordion-collapse" data-accordion="collapse">
        <h2 id="accordion-collapse-heading-1">
          <button
            type="button"
            class="flex items-center justify-between w-full p-5 font-medium text-left text-gray-500 border border-b-0 border-gray-200 rounded-t-xl focus:ring-4 focus:ring-gray-200 dark:focus:ring-gray-800 dark:border-gray-700 dark:text-gray-400 hover:bg-gray-100 dark:hover:bg-gray-800"
            data-accordion-target="#accordion-collapse-body-1"
            aria-expanded="true"
            aria-controls="accordion-collapse-body-1"
          >
            <span>What is Flowbite?</span>
            <svg
              data-accordion-icon
              class="w-6 h-6 rotate-180 shrink-0"
              fill="currentColor"
              viewBox="0 0 20 20"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                fill-rule="evenodd"
                d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z"
                clip-rule="evenodd"
              ></path>
            </svg>
          </button>
        </h2>
        <div id="accordion-collapse-body-1" class="" aria-labelledby="accordion-collapse-heading-1">
          <div class="p-5 border border-b-0 border-gray-200 dark:border-gray-700 dark:bg-gray-900">
            <p class="mb-2 text-gray-500 dark:text-gray-400">
              Flowbite is an open-source library of interactive components built on top of Tailwind CSS including
              buttons, dropdowns, modals, navbars, and more.
            </p>
            <p class="text-gray-500 dark:text-gray-400">
              Check out this guide to learn how to{' '}
              <a href="/docs/getting-started/introduction/" class="text-blue-600 dark:text-blue-500 hover:underline">
                get started
              </a>{' '}
              and start developing websites even faster with components on top of Tailwind CSS.
            </p>
          </div>
        </div>
        <h2 id="accordion-collapse-heading-2">
          <button
            type="button"
            class="flex items-center justify-between w-full p-5 font-medium text-left text-gray-500 border border-b-0 border-gray-200 focus:ring-4 focus:ring-gray-200 dark:focus:ring-gray-800 dark:border-gray-700 dark:text-gray-400 hover:bg-gray-100 dark:hover:bg-gray-800"
            data-accordion-target="#accordion-collapse-body-2"
            aria-expanded="false"
            aria-controls="accordion-collapse-body-2"
          >
            <span>Is there a Figma file available?</span>
            <svg
              data-accordion-icon
              class="w-6 h-6 shrink-0"
              fill="currentColor"
              viewBox="0 0 20 20"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                fill-rule="evenodd"
                d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z"
                clip-rule="evenodd"
              ></path>
            </svg>
          </button>
        </h2>
        <div id="accordion-collapse-body-2" class="" aria-labelledby="accordion-collapse-heading-2">
          <div class="p-5 border border-b-0 border-gray-200 dark:border-gray-700">
            <p class="mb-2 text-gray-500 dark:text-gray-400">
              Flowbite is first conceptualized and designed using the Figma software so everything you see in the
              library has a design equivalent in our Figma file.
            </p>
            <p class="text-gray-500 dark:text-gray-400">
              Check out the{' '}
              <a href="https://flowbite.com/figma/" class="text-blue-600 dark:text-blue-500 hover:underline">
                Figma design system
              </a>{' '}
              based on the utility classes from Tailwind CSS and components from Flowbite.
            </p>
          </div>
        </div>
        <h2 id="accordion-collapse-heading-3">
          <button
            type="button"
            class="flex items-center justify-between w-full p-5 font-medium text-left text-gray-500 border border-gray-200 focus:ring-4 focus:ring-gray-200 dark:focus:ring-gray-800 dark:border-gray-700 dark:text-gray-400 hover:bg-gray-100 dark:hover:bg-gray-800"
            data-accordion-target="#accordion-collapse-body-3"
            aria-expanded="false"
            aria-controls="accordion-collapse-body-3"
          >
            <span>What are the differences between Flowbite and Tailwind UI?</span>
            <svg
              data-accordion-icon
              class="w-6 h-6 shrink-0"
              fill="currentColor"
              viewBox="0 0 20 20"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                fill-rule="evenodd"
                d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z"
                clip-rule="evenodd"
              ></path>
            </svg>
          </button>
        </h2>
        <div id="accordion-collapse-body-3" class="" aria-labelledby="accordion-collapse-heading-3">
          <div class="p-5 border border-t-0 border-gray-200 dark:border-gray-700">
            <p class="mb-2 text-gray-500 dark:text-gray-400">
              The main difference is that the core components from Flowbite are open source under the MIT license,
              whereas Tailwind UI is a paid product. Another difference is that Flowbite relies on smaller and
              standalone components, whereas Tailwind UI offers sections of pages.
            </p>
            <p class="mb-2 text-gray-500 dark:text-gray-400">
              However, we actually recommend using both Flowbite, Flowbite Pro, and even Tailwind UI as there is no
              technical reason stopping you from using the best of two worlds.
            </p>
            <p class="mb-2 text-gray-500 dark:text-gray-400">Learn more about these technologies:</p>
            <ul class="pl-5 text-gray-500 list-disc dark:text-gray-400">
              <li>
                <a href="https://flowbite.com/pro/" class="text-blue-600 dark:text-blue-500 hover:underline">
                  Flowbite Pro
                </a>
              </li>
              <li>
                <a
                  href="https://tailwindui.com/"
                  rel="nofollow"
                  class="text-blue-600 dark:text-blue-500 hover:underline"
                >
                  Tailwind UI
                </a>
              </li>
            </ul>
          </div>
        </div>
      </div>

      <br />
      <br />

      <Box>
        <Box
          margin="mb-4"
          padding="p-4"
          family="text-sm"
          color="text-blue-800"
          bg="bg-blue-50"
          rounded="rounded-lg"
          dark={{ color: 'text-blue-400', bg: 'bg-gray-800' }}
          role="alert"
        >
          <span class="font-medium">Info alert!</span> Change a few things up and try submitting again.
        </Box>
        <Box
          margin="mb-4"
          padding="p-4"
          family="text-sm"
          color="text-red-800"
          bg="bg-red-50"
          rounded="rounded-lg"
          dark={{ color: 'text-red-400', bg: 'bg-gray-800' }}
          role="alert"
        >
          <span class="font-medium">Danger alert!</span> Change a few things up and try submitting again.
        </Box>
        <Box
          margin="mb-4"
          padding="p-4"
          family="text-sm"
          color="text-green-800"
          bg="bg-green-50"
          rounded="rounded-lg"
          dark={{ color: 'text-green-400', bg: 'bg-gray-800' }}
          role="alert"
        >
          <span class="font-medium">Success alert!</span> Change a few things up and try submitting again.
        </Box>
        <Box
          margin="mb-4"
          padding="p-4"
          family="text-sm"
          color="text-yellow-800"
          bg="bg-yellow-50"
          rounded="rounded-lg"
          dark={{ color: 'text-yellow-300', bg: 'bg-gray-800' }}
          role="alert"
        >
          <span class="font-medium">Warning alert!</span> Change a few things up and try submitting again.
        </Box>
        <Box
          margin="mb-4"
          padding="p-4"
          family="text-sm"
          color="text-gray-800"
          bg="bg-gray-50"
          rounded="rounded-lg"
          dark={{ color: 'text-gray-300', bg: 'bg-gray-800' }}
          role="alert"
        >
          <span class="font-medium">Dark alert!</span> Change a few things up and try submitting again.
        </Box>
      </Box>

      <Box.Stack size="w-full">
        <Box.Between all="w-full">
          <h2 id="accordion-collapse-heading-1">
            <button
              type="button"
              class="flex items-center  justify-between w-full p-5 font-medium text-left text-gray-500 border border-b-0 border-gray-200 rounded-t-xl focus:ring-4 focus:ring-gray-200 dark:focus:ring-gray-800 dark:border-gray-700 dark:text-gray-400 hover:bg-gray-100 dark:hover:bg-gray-800"
              data-accordion-target="#accordion-collapse-body-1"
              aria-expanded="true"
              aria-controls="accordion-collapse-body-1"
            >
              <span>What is Flowbite?</span>
              <svg
                data-accordion-icon
                class="w-6 h-6 rotate-180 shrink-0"
                fill="currentColor"
                viewBox="0 0 20 20"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  fill-rule="evenodd"
                  d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z"
                  clip-rule="evenodd"
                ></path>
              </svg>
            </button>
          </h2>
          <Box.Grow all="w-full">
            <div id="accordion-collapse-body-1" class="" aria-labelledby="accordion-collapse-heading-1">
              <div class="p-5 border border-b-0 border-gray-200 dark:border-gray-700 dark:bg-gray-900">
                <p class="mb-2 text-gray-500 dark:text-gray-400">
                  Flowbite is an open-source library of interactive components built on top of Tailwind CSS including
                  buttons, dropdowns, modals, navbars, and more.
                </p>
                <p class="text-gray-500 dark:text-gray-400">
                  Check out this guide to learn how to{' '}
                  <a
                    href="/docs/getting-started/introduction/"
                    class="text-blue-600 dark:text-blue-500 hover:underline"
                  >
                    get started
                  </a>{' '}
                  and start developing websites even faster with components on top of Tailwind CSS.
                </p>
              </div>
            </div>
          </Box.Grow>
        </Box.Between>
        <Box.Between all="w-full">
          <h2 id="accordion-collapse-heading-2">
            <button
              type="button"
              class="flex items-center justify-between w-full p-5 font-medium text-left text-gray-500 border border-b-0 border-gray-200 focus:ring-4 focus:ring-gray-200 dark:focus:ring-gray-800 dark:border-gray-700 dark:text-gray-400 hover:bg-gray-100 dark:hover:bg-gray-800"
              data-accordion-target="#accordion-collapse-body-2"
              aria-expanded="false"
              aria-controls="accordion-collapse-body-2"
            >
              <span>Is there a Figma file available?</span>
            </button>
          </h2>
          <Box.Grow all="w-full">
            <div id="accordion-collapse-body-2" class="" aria-labelledby="accordion-collapse-heading-2">
              <div class="p-5 border border-b-0 border-gray-200 dark:border-gray-700">
                <p class="mb-2 text-gray-500 dark:text-gray-400">
                  Flowbite is first conceptualized and designed using the Figma software so everything you see in the
                  library has a design equivalent in our Figma file.
                </p>
                <p class="text-gray-500 dark:text-gray-400">
                  Check out the{' '}
                  <a href="https://flowbite.com/figma/" class="text-blue-600 dark:text-blue-500 hover:underline">
                    Figma design system
                  </a>{' '}
                  based on the utility classes from Tailwind CSS and components from Flowbite.
                </p>
              </div>
            </div>
          </Box.Grow>
        </Box.Between>
        <Box.Between all="w-full">
          <h2 id="accordion-collapse-heading-3">
            <button
              type="button"
              class="flex items-center justify-between w-full p-5 font-medium text-left text-gray-500 border border-gray-200 focus:ring-4 focus:ring-gray-200 dark:focus:ring-gray-800 dark:border-gray-700 dark:text-gray-400 hover:bg-gray-100 dark:hover:bg-gray-800"
              data-accordion-target="#accordion-collapse-body-3"
              aria-expanded="false"
              aria-controls="accordion-collapse-body-3"
            >
              <span>What are the differences between Flowbite and Tailwind UI?</span>
            </button>
          </h2>
          <Box.Grow all="w-full">
            <div id="accordion-collapse-body-3" class="" aria-labelledby="accordion-collapse-heading-3">
              <div class="p-5 border border-t-0 border-gray-200 dark:border-gray-700">
                <p class="mb-2 text-gray-500 dark:text-gray-400">
                  The main difference is that the core components from Flowbite are open source under the MIT license,
                  whereas Tailwind UI is a paid product. Another difference is that Flowbite relies on smaller and
                  standalone components, whereas Tailwind UI offers sections of pages.
                </p>
                <p class="mb-2 text-gray-500 dark:text-gray-400">
                  However, we actually recommend using both Flowbite, Flowbite Pro, and even Tailwind UI as there is no
                  technical reason stopping you from using the best of two worlds.
                </p>
                <p class="mb-2 text-gray-500 dark:text-gray-400">Ok</p>
              </div>
            </div>
          </Box.Grow>
        </Box.Between>
        <Box.Between all="w-full">
          <h2 id="accordion-collapse-heading-3">
            <button
              type="button"
              class="flex items-center justify-between w-full p-5 font-medium text-left text-gray-500 border border-gray-200 focus:ring-4 focus:ring-gray-200 dark:focus:ring-gray-800 dark:border-gray-700 dark:text-gray-400 hover:bg-gray-100 dark:hover:bg-gray-800"
              data-accordion-target="#accordion-collapse-body-3"
              aria-expanded="false"
              aria-controls="accordion-collapse-body-3"
            >
              <span>What are the differences between Flowbite and Tailwind UI?</span>
              <svg
                data-accordion-icon
                class="w-6 h-6 shrink-0"
                fill="currentColor"
                viewBox="0 0 20 20"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  fill-rule="evenodd"
                  d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z"
                  clip-rule="evenodd"
                ></path>
              </svg>
            </button>
          </h2>
          <Box.Grow all="w-full">
            <div id="accordion-collapse-body-3" class="" aria-labelledby="accordion-collapse-heading-3">
              <div class="p-5 border border-t-0 border-gray-200 dark:border-gray-700">
                <p class="mb-2 text-gray-500 dark:text-gray-400">
                  The main difference is that the core components from Flowbite are open source under the MIT license,
                  whereas Tailwind UI is a paid product. Another difference is that Flowbite relies on smaller and
                  standalone components, whereas Tailwind UI offers sections of pages.
                </p>
                <p class="mb-2 text-gray-500 dark:text-gray-400">
                  However, we actually recommend using both Flowbite, Flowbite Pro, and even Tailwind UI as there is no
                  technical reason stopping you from using the best of two worlds.
                </p>
                <p class="mb-2 text-gray-500 dark:text-gray-400">Learn more about these technologies:</p>
                <ul class="pl-5 text-gray-500 list-disc dark:text-gray-400">
                  <li>
                    <a href="https://flowbite.com/pro/" class="text-blue-600 dark:text-blue-500 hover:underline">
                      Flowbite Pro
                    </a>
                  </li>
                  <li>
                    <a
                      href="https://tailwindui.com/"
                      rel="nofollow"
                      class="text-blue-600 dark:text-blue-500 hover:underline"
                    >
                      Tailwind UI
                    </a>
                  </li>
                </ul>
              </div>
            </div>
          </Box.Grow>
        </Box.Between>
      </Box.Stack>
    </>
  );
}
