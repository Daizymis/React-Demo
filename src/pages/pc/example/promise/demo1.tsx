import { Button, Card, Divider } from 'antd';
import { useRef, useEffect } from 'react';
import myPromise from './Promise';
import { useState } from 'react';
import React from 'react';

const Demo1 = () => {
  const [output, setOutput] = useState<string[]>([]);
  useEffect(() => {
    console.log(output);
  }, [output]);
  const testCode = () => {
    setOutput([]);
    const p1 = new myPromise((resolve, reject) => {
      reject('hello world');
    });
    const p2 = new myPromise((resolve, reject) => {
      resolve('hello world');
    });
    p1.then(undefined, res => {
      setOutput(prevoutput => prevoutput.concat([`err ${res}`]));
    });
    p2.then(res => {
      setOutput(prevoutput => prevoutput.concat([`success ${res}`]));
    });
  };
  const TestCodeArea = () => {
    return (
      <div>
        <pre>
          <code>{testCode.toString()}</code>
        </pre>
        <Divider />
        <Button type="primary" onClick={testCode}>
          test
        </Button>
        <Divider />
      </div>
    );
  };
  return (
    <React.Fragment>
      <Card hoverable style={{ width: '80%' }} cover={<TestCodeArea></TestCodeArea>}>
        {output.map(item => (
          <div key={item}>{item}</div>
        ))}
      </Card>
      <pre>
        <code>{myPromise.toString()}</code>
      </pre>
    </React.Fragment>
  );
};

export default Demo1;
