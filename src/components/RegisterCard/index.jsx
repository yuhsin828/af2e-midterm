import { Link, useNavigate } from "react-router-dom";
import React, { useEffect } from "react";
import { Form, Input, Checkbox, Button } from "antd";
import { WarningOutlined } from "@ant-design/icons";

import { useRegisterWithEmailPassword } from "../../react-query";
import styles from "./registercard.module.css"

const RegisterCard = ({ redirect }) => {

  const { mutate, error, isLoading, isError, isSuccess, data } = useRegisterWithEmailPassword();

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
      form={form}
      name="register"
      onFinish={onFinish}
      className={styles.registerForm}
      scrollToFirstError
    >
      <Form.Item
        name="name"
        label="您的姓名"
        // tooltip="What do you want others to call you?"
        rules={[
          {
            required: true,
            message: "請輸入您的姓名",
            whitespace: true,
          },
        ]}
      >
        <Input />
      </Form.Item>
      <Form.Item
        name="email"
        label="電子信箱"
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
      >
        <Input />
      </Form.Item>

      <Form.Item
        name="password"
        label="密碼"
        rules={[
          {
            required: true,
            message: "請設定您的密碼",
          },
        ]}
        hasFeedback
      >
        <Input.Password />
      </Form.Item>

      <Form.Item
        name="rePassword"
        label="再次輸入密碼"
        dependencies={["password"]}
        hasFeedback
        rules={[
          {
            required: true,
            message: "請再次輸入您的密碼",
          },
          ({ getFieldValue }) => ({
            validator(_, value) {
              if (!value || getFieldValue("password") === value) {
                return Promise.resolve();
              }

              return Promise.reject(
                new Error("密碼不相符")
              );
            },
          }),
        ]}
      >
        <Input.Password />
      </Form.Item>

      <Form.Item
        name="agreement"
        valuePropName="checked"
        rules={[
          {
            validator: (_, value) =>
              value
                ? Promise.resolve()
                : Promise.reject(new Error("您必須同意會員條款及隱私政策")),
          },
        ]}
      >
        <Checkbox>
          我同意<Link to={"/"}>會員條款</Link>及<Link to={"/"}>隱私政策</Link>
        </Checkbox>
      </Form.Item>
      <Form.Item>
        {isLoading ? (
          <Button
            type="primary"
            className={styles.loginForm__button}
            htmlType="submit"
            loading
          >
            註冊
          </Button>
        ) : (
          <Button
            type="primary"
            className={styles.loginForm__button}
            htmlType="submit"
          >
            註冊
          </Button>
        )}
        已經是會員？{" "}
        <Link to={`/auth/login?redirect=${redirect}`}>登入</Link>
        {!isError ? (
          <div></div>
        ) : (
          <div className={styles.loginForm__errorWrap}>
            <h3 className={styles.loginForm__errorTitle}>
              <WarningOutlined />
              {"  "}哎呀！發生了一些問題
            </h3>
            <p className={styles.loginForm__errorMessage}>{error.message}</p>
          </div>
        )}
      </Form.Item>
    </Form>
  );
};
export default RegisterCard;
