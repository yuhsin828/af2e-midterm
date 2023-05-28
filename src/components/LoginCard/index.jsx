import React, { useEffect, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { Form, Input, Button, Checkbox } from 'antd';
import { WarningOutlined, MailOutlined, LockOutlined } from '@ant-design/icons';

import { useSignInWithEmailPassword } from "../../react-query";

import styles from './logincard.module.css';


const LoginCard = ({ redirect }) => {

   const { mutate, error, isLoading, isError, isSuccess, data } = useSignInWithEmailPassword();
   const [isRemember, setIsRemember] = useState(false);
   const [form] = Form.useForm();
   const navigate = useNavigate();

   const onFinish = (values) => {
      console.log("Received values of form: ", values);
      mutate(values);
   };

   useEffect(() => {
      if (isSuccess) {
         navigate(redirect);
      }
   }, [isSuccess, redirect]);

   return (
      <Form
         name="normal_login"
         className={styles.loginForm}
         form={form}
         initialValues={{
            isRemember: true,
         }}
         onFinish={onFinish}
      // onFihishFailed={onFinishFailed}
      >
         <Form.Item
            name="email"
            rules={[
               {
                  type: "email",
                  message: "請輸入有效的的電子信箱",
               },
               {
                  required: true,
                  message: "請輸入您的電子信箱",
               },
            ]}
            hasFeedback
         >
            <Input
               prefix={<MailOutlined />}
               placeholder="電子信箱"
            />
         </Form.Item>
         <Form.Item
            name="password"
            rules={[
               {
                  required: true,
                  message: "請輸入您的密碼",
               },
            ]}
            hasFeedback
         >
            <Input.Password
               prefix={<LockOutlined />}
               type="password"
               placeholder="密碼"
            />
         </Form.Item>
         <Form.Item>
            <Form.Item name="remember" valuePropName="checked" noStyle>
               <Checkbox onChange={() => setIsRemember(!isRemember)} checked={isRemember}>
                  記住我
               </Checkbox>
            </Form.Item>
            <span className={styles.loginForm__forget}>
               <Link to={"/"}>
                  忘記密碼？
               </Link>
            </span>
         </Form.Item>

         <Form.Item>
            {isLoading ? (
               <Button
                  type="primary"
                  htmlType="submit"
                  className={styles.loginForm__button}
                  loading
               >
                  登入
               </Button>
            ) : (
               <Button
                  type="primary"
                  htmlType="submit"
                  className={styles.loginForm__button}
               >
                  登入
               </Button>
            )}
            還沒有加入會員？ <Link to={`/auth/register?redirect=${redirect}`}>註冊</Link>
            {!isError ? (
               <div></div>
            ) : (
               <div className={styles.loginForm__errorWrap}>
                  <div className={styles.loginForm__errorTitle}>
                     <WarningOutlined />
                     {"  "}哎呀！發生了一些問題
                  </div>
                  <p className={styles.loginForm__errorMessage}>{error.message}</p>
               </div>
            )}
         </Form.Item>
      </Form>
   );
};

export default LoginCard;