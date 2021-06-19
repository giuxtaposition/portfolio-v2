import { Tab, useColorModeValue, HStack, Icon, Text } from '@chakra-ui/react'
import { filterTab } from './types'

const FilterTab: React.FC<filterTab> = ({ filter, icon }) => {
  return (
    <Tab
      bg={useColorModeValue('purple.100', 'gray.700')}
      color={useColorModeValue('gray.600', 'gray.400')}
      _selected={{
        bgGradient: 'linear(to-r, purple.300, purple.400, blue.400)',
        color: 'white',
      }}
      mr={2}
      mt={2}
    >
      <HStack spacing={1}>
        <Icon as={icon} />
        <Text>{filter}</Text>
      </HStack>
    </Tab>
  )
}

export default FilterTab
