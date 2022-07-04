import { Fragment } from 'react';
import { Box } from '@mui/material';
import TextField from '@mui/material/TextField';
import { Form } from 'antd';

const Search = ({ searchQuery, setSearchQuery }) => {
  return (
    <Fragment>
      <Form
        name="basic"
        wrapperCol={{ span: 6 }}
        initialValues={{ remember: true }}
        autoComplete="on"
      >
        <Box
          display="flex"
          flexDirection="row"
          textAlign="center"
          justifyContent="center"
          pt={1}
          pb={1}
        >
          <Form.Item
            name="search"
            rules={[{ message: 'Please input your username!' }]}
            style={{ paddingRight: '10px' }}
          >
            <TextField
              label="Search"
              type="text"
              value={searchQuery}
              onInput={(e: any) => setSearchQuery(e.target.value)}
            />
          </Form.Item>
        </Box>
      </Form>
    </Fragment>
  );
};

export default Search;
