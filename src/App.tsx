import DarkModeSwitch from './DarkModeSwitch';

import Box from './components/Box';
import Button from './components/Button';
import Text from './components/Text';

const data = [
  {
    label: 'Summary',
    qntd: '15k',
    percentage: '25%',
    date: 'Last week 18.7k',
  },
  {
    label: 'Engagement',
    qntd: '23k',
    percentage: '5%',
    date: 'Last week 20.2k',
  },
  {
    label: 'Customers',
    qntd: '43k',
    percentage: '2%',
    date: 'Last week 44.9k',
  },
  {
    label: 'Views',
    qntd: '107k',
    percentage: '35%',
    date: 'Last week 97k',
  },
];

export default function App(): any {
  return (
    <>
      <div>
        <DarkModeSwitch />
      </div>
      <Box twClasses="w-16 h-16 text-white dark:text-black dark:bg-purple-800 bg-slate-200">Teste</Box>
      <Box>
        <Button bg="dark:bg-purple-800 bg-slate-200">Default</Button>
        <Button variant="alternative">Alternative</Button>
        <Button variant="dark">Dark</Button>
        <Button variant="light">Light</Button>
        <Button variant="green">Green</Button>
        <Button variant="red">Red</Button>
        <Button variant="yellow">Yellow</Button>
      </Box>
      <Box size="w-full">
        <Box.Center bg="bg-gray-800" padding="p-4" size="w-full h-screen">
          <Box.Stack flex="md:flex-row">
            {data.map(({ label, qntd, percentage, date }) => {
              return (
                <Box
                  justify="justify-center"
                  align="items-start"
                  bg="bg-gray-700"
                  size="h-28 md:w-40 w-60"
                  padding="px-4"
                  margin="mx-0.5 my-0.5"
                  key={label}
                >
                  <Box.Stack>
                    <Text.label size="text-sm" weight="font-medium" color="text-gray-400" margin="my-2">
                      {label}
                    </Text.label>

                    <Box.Center>
                      <Text size="text-3xl" weight="font-bold" color="text-gray-200">
                        {qntd}
                      </Text>
                      <Box.Between
                        padding="px-0.5 py-0.5"
                        margin="mx-2"
                        border="rounded-xl"
                        color="text-violet-500"
                        all="font-medium"
                      >
                        <Text>{percentage}</Text>
                      </Box.Between>
                    </Box.Center>
                    <Text.label size="text-sm" weight="font-medium" color="text-gray-400">
                      {date}
                    </Text.label>
                  </Box.Stack>
                </Box>
              );
            })}
          </Box.Stack>
        </Box.Center>
      </Box>
    </>
  );
}
