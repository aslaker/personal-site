import { type ReactNode } from "react";
import MainLayout from "../../layouts/MainLayout";
import { type NextPageWithLayout } from "../_app";

const ContactPage: NextPageWithLayout = () => {
  return <h1>ContactPage works!</h1>;
};

export default ContactPage;

ContactPage.getLayout = function getLayout(page: ReactNode) {
  return <MainLayout>{page}</MainLayout>;
};
