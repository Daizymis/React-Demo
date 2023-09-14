import { Button, Card, Collapse, Divider } from 'antd';
import type { CollapseProps } from 'antd';
import { useRef, useEffect } from 'react';
import myPromise from './Promise';
import { useState } from 'react';
import React from 'react';

const Demo1 = () => {
  const [output, setOutput] = useState<string[]>([]);
  useEffect(() => {
    console.log(output);
  }, [output]);
  const testCode1 = () => {
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
  const testCode2 = () => {
    const p1 = new myPromise((resolve, reject) => {
      reject('hello world');
    });
    p1.then(
      res => setOutput(prevoutput => prevoutput.concat([`success ${res}`])),
      err => {
        setOutput(prevoutput => prevoutput.concat([`err ${err}`]));
        return new myPromise((resolve, reject) => {
          //返回一个新的Promise
          resolve('hello lian');
        });
      }
    ).then(
      res => setOutput(prevoutput => prevoutput.concat([`success ${res}`])),
      err => setOutput(prevoutput => prevoutput.concat([`err ${err}`]))
    );
  };
  const TestCodeArea = () => {
    const testList: CollapseProps['items'] = [
      {
        key: '1',
        label: (
          <span>
            基础Promise
            <Button type="text" onClick={testCode1}>
              test
            </Button>
          </span>
        ),
        children: (
          <div>
            <pre>
              <code>{testCode1.toString()}</code>
            </pre>
            <Divider />
          </div>
        )
      },
      {
        key: '2',
        label: (
          <span>
            链式调用
            <Button type="text" onClick={testCode2}>
              test
            </Button>
          </span>
        ),
        children: (
          <div>
            <pre>
              <code>{testCode2.toString()}</code>
            </pre>
          </div>
        )
      }
    ];
    return <Collapse items={testList}></Collapse>;
  };
  return (
    <React.Fragment>
      <Card hoverable style={{ width: '80%' }} cover={<TestCodeArea></TestCodeArea>}>
        {output.map((item, index) => (
          <div key={item + index}>{item}</div>
        ))}
      </Card>
      <pre>
        <code>{myPromise.toString()}</code>
      </pre>
    </React.Fragment>
  );
};

export default Demo1;
