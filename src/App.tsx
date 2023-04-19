import Box from './components/Box';
import Text from './components/Text';

export default function App(): any {
  return (
    <>
      <Box size="w-full">
        <Box.Center bg="bg-gray-800" padding="p-4" size="w-full h-screen ">
          <Box.Stack flex="flex flex-col md:flex-row">
            <Box
              justify="justify-center"
              align="items-start"
              bg="bg-gray-700"
              size="h-28 md:w-40 w-60"
              padding="px-4"
              margin="mx-0.5 my-0.5"
            >
              <Box.Stack>
                <Text.label size="text-sm" weight="font-medium" color="text-gray-400" margin="my-2">
                  Summary
                </Text.label>

                <Box.Center>
                  <div className="text-3xl font-bold text-gray-200">15k</div>
                  <Box.Between
                    padding="px-0.5 py-0.5"
                    margin="mx-2"
                    border="rounded-xl"
                    color="text-violet-400"
                    all="font-medium"
                  >
                    <div>
                      <ion-icon name="arrow-down-outline"></ion-icon>
                    </div>
                    <div>25%</div>
                  </Box.Between>
                </Box.Center>
                <div className="text-sm font-medium text-gray-400 ">Last week 18.7k</div>
              </Box.Stack>
            </Box>
            <div className="bg-gray-700 flex items-start h-28 md:w-40 w-60 justify-center px-4 mx-0.5 my-0.5">
              <div className="flex-col">
                <div className="text-sm font-medium text-gray-400 my-2">Engagement</div>
                <div className="class flex items-center">
                  <div className="text-3xl font-bold text-gray-200">23k</div>
                  <div className="flex items-center justify-between mx-2 px-0.5 py-0.5 rounded-xl text-green-500 font-medium ">
                    <div>
                      <ion-icon name="arrow-up-outline"></ion-icon>
                    </div>
                    <div>5%</div>
                  </div>
                </div>
                <div className="text-sm font-medium text-gray-400 ">Last week 20.2k</div>
              </div>
            </div>
            <div className="bg-gray-700 flex items-start h-28 md:w-40 w-60 justify-center px-4 mx-0.5 my-0.5">
              <div className="flex-col">
                <div className="text-sm font-medium text-gray-400 my-2">Customers</div>
                <div className="class flex items-center">
                  <div className="text-3xl font-bold text-gray-200">43k</div>
                  <div className="flex items-center justify-between mx-2 px-0.5 py-0.5 rounded-xl text-violet-500 font-medium ">
                    <div>
                      <ion-icon name="arrow-down-outline"></ion-icon>
                    </div>
                    <div>2%</div>
                  </div>
                </div>
                <div className="text-sm font-medium text-gray-400 ">Last week 44.9k</div>
              </div>
            </div>
            <div className="bg-gray-700 flex items-start h-28 md:w-40 w-60 justify-center px-4 mx-0.5 my-0.5">
              <div className="flex-col">
                <div className="text-sm font-medium text-gray-400 my-2">Views</div>
                <div className="class flex items-center">
                  <div className="text-3xl font-bold text-gray-200">107k</div>
                  <div className="flex items-center justify-between mx-2 px-0.5 py-0.5 rounded-xl text-green-500 font-medium ">
                    <div>
                      <ion-icon name="arrow-up-outline"></ion-icon>
                    </div>
                    <div>35%</div>
                  </div>
                </div>
                <div className="text-sm font-medium text-gray-400 ">Last week 97k</div>
              </div>
            </div>
          </Box.Stack>
        </Box.Center>
      </Box>
    </>
  );
}
