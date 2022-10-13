import Link from "next/link";
import * as Yup from "yup";
import Button from "../../components/Button";
import Container from "../../components/Container";
import Footer from "../../components/Footer";
import Form from "../../components/Form";
import FormField from "../../components/FormField";
import Header from "../../components/Header";
import Input from "../../components/Input";
import AppLink from "../../components/Link";

export default function Home() {
  return (
    <div>
      <Header></Header>
      <div className="flex items-center">
        <Container className="">
          <div>
            <h1 className="text-4xl font-extrabold text-slate-900 mb-8">
              Austrittsformular
            </h1>
            <div className="grid grid-cols-3 mb-8 gap-8">
              <div className="col-span-2">
                <p className="mb-8">
                  Lorem ipsum dolor sit amet consectetur adipisicing elit.
                  Impedit autem aut, quaerat facilis tempora non! Ducimus
                  quisquam ipsum pariatur fuga repellat numquam consequuntur
                  natus molestiae impedit, minima quo expedita recusandae!
                </p>
                <Form
                  className="col-span-2"
                  initialValues={{
                    confession: null,
                    firstname: "",
                    lastname: "",
                    email: "",
                  }}
                  validationSchema={Yup.object().shape({
                    firstname: Yup.string().required("Pflichtfeld"),
                    lastname: Yup.string().required("Pflichtfeld"),
                    email: Yup.string()
                      .email("Ungültige E-Mail-Adresse")
                      .required("Pflichtfeld"),
                  })}
                  onSubmit={async (...args) => console.log(args)}
                >
                  {({ isSubmitting, submitCount, isValid, error }) => {
                    return (
                      <div className="flex flex-col gap-4">
                        <div className="grid grid-cols-2 gap-4">
                          <FormField name="firstname" label="Vorname">
                            <Input type="text"></Input>
                          </FormField>
                          <FormField name="lastname" label="Nachname">
                            <Input type="text"></Input>
                          </FormField>
                        </div>
                        <div className="grid grid-cols-2 gap-4">
                          <FormField name="email" label="E-Mail">
                            <Input type="email"></Input>
                          </FormField>
                        </div>

                        <div className="flex justify-end">
                          <Button type="submit">Formular generieren</Button>
                        </div>
                      </div>
                    );
                  }}
                </Form>
              </div>
              <div className="bg-cyan-100 rounded px-6 py-8">
                <h3 className="text-xl font-extrabold mb-4">
                  Häufig gestellte Fragen
                </h3>
                <ul className="list-disc pl-4 flex flex-col gap-2">
                  <li>
                    <AppLink href="/">
                      Wie trete ich aus der Kirche aus?
                    </AppLink>
                  </li>
                  <li>
                    <AppLink href="/">
                      Was mache ich, wenn die Kirche mich kontaktiert?
                    </AppLink>
                  </li>
                  <li>
                    <AppLink href="/">
                      Wie melde ich mich von der Kirchensteuer ab?
                    </AppLink>
                  </li>
                  <li>
                    <AppLink href="/">
                      Warum kostet der Austritt bei anderen Anbietern?
                    </AppLink>
                  </li>
                  <li>
                    <AppLink href="/">Was geschieht mit meinen Daten?</AppLink>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </Container>
      </div>
      <Footer></Footer>
    </div>
  );
}
