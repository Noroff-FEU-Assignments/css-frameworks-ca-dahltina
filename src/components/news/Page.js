import React from 'react';
import { Pagination } from 'react-bootstrap';

function Page() {
  return (
    <div>
      <Pagination>
        <Pagination.Item active>{1}</Pagination.Item>
        <Pagination.Item>{2}</Pagination.Item>
        <Pagination.Item>{3}</Pagination.Item>
        <Pagination.Item>{4}</Pagination.Item>
      </Pagination>
    </div>
  )
}

export default Page;
