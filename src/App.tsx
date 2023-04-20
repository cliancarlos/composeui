import Box from './components/Box';
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
      <Text color="text-red-600">default</Text>
      <Text variant="h1">h1</Text>
      <Text.h1>h1</Text.h1>
      <Text variant="h2">h2</Text>
      <Text.h2>h2</Text.h2>
      <Text variant="h3">h3</Text>
      <Text.h3>h3</Text.h3>

      <Text variant="h4">h4</Text>
      <Text.h4>h4</Text.h4>
      <Text variant="h5">h5</Text>
      <Text.h5>h5</Text.h5>
      <Text variant="h6">h6</Text>
      <Text.h6>h6</Text.h6>
      <br />
      <Text variant="label">label</Text>
      <br />
      <Text.label>label</Text.label>

      {/* <Box size="w-full">
        <Box.Center bg="bg-gray-800" padding="p-4" size="w-full h-screen ">
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
                    <Text variant="h1">h1</Text>
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
      </Box> */}
    </>
  );
}
