import {
  Avatar,
  Box,
  Button,
  chakra,
  Flex,
  FormControl,
  FormHelperText,
  Input,
  InputGroup,
  InputLeftElement,
  InputRightElement,
  Link,
  Stack,
} from '@chakra-ui/react';
import React, {useState} from 'react';
import {FaLock, FaUserAlt} from 'react-icons/fa';

const Login = (): JSX.Element | null => {
  const [showPassword, setShowPassword] = useState(false);

  const CFaUserAlt = chakra(FaUserAlt);
  const CFaLock = chakra(FaLock);

  const handleShowClick = () => setShowPassword(!showPassword);

  return (
    <Flex
      alignItems="center"
      backgroundColor="gray.200"
      flexDirection="column"
      height="100vh"
      justifyContent="center"
      width="100wh"
    >
      <Stack alignItems="center" flexDir="column" justifyContent="center" mb="2">
        <Avatar bg="teal.500" />
        <Box minW={{base: '90%', md: '468px'}}>
          <form>
            <Stack
              backgroundColor="whiteAlpha.900"
              borderRadius="8px"
              boxShadow="md"
              p="1rem"
              spacing={4}
            >
              <FormControl>
                <InputGroup>
                  <InputLeftElement pointerEvents="none">
                    <CFaUserAlt color="gray.300" />
                  </InputLeftElement>
                  <Input placeholder="email address" type="email" />
                </InputGroup>
              </FormControl>
              <FormControl>
                <InputGroup>
                  <InputLeftElement color="gray.300" pointerEvents="none">
                    <CFaLock color="gray.300" />
                  </InputLeftElement>
                  <Input placeholder="Password" type={showPassword ? 'text' : 'password'} />
                  <InputRightElement width="4.5rem">
                    <Button h="1.75rem" size="sm" onClick={handleShowClick}>
                      {showPassword ? 'Hide' : 'Show'}
                    </Button>
                  </InputRightElement>
                </InputGroup>
                <FormHelperText textAlign="right">
                  <Link>forgot password?</Link>
                </FormHelperText>
              </FormControl>
              <Button colorScheme="teal" type="submit" variant="solid" width="full">
                Login
              </Button>
            </Stack>
          </form>
        </Box>
      </Stack>
      <Box>
        New to us? <Link color="teal.500">Sign Up</Link>
      </Box>
    </Flex>
  );
};

// eslint-disable-next-line import/no-default-export
export default Login;
