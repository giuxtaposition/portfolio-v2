import { Tab, useColorModeValue, HStack, Icon, Text } from '@chakra-ui/react'
import { filterTab } from './types'

const FilterTab: React.FC<filterTab> = ({ filter, icon }) => {
  return (
    <Tab
      bg={useColorModeValue('gray.100', 'gray.700')}
      color={useColorModeValue('gray.600', 'gray.400')}
      _selected={{
        color: 'purple.800',
        bg: 'purple.100',
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
