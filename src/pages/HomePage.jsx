import React from "react";
import SearchBar from "../component/SearchBar";
import ContactList from "../component/ContactList";
import { deleteContact } from "../utils/api";
// import { deleteContact, getContacts } from "../utils/data";
import { func } from "prop-types";
import { GetContacts } from "../utils/api";
import { useSearchParams } from "react-router-dom";
import { LocaleConsumer } from "../contexts/LocaleContext";

export default function HomePageWrapper() {
  const [searchParams, setSearchParams] = useSearchParams();
  const keyword = searchParams.get("keyword");

  function changeSearchParams(keyword) {
    setSearchParams({ keyword });
  }
  return <HomePage defaultKeyword={keyword} keywordChange={changeSearchParams} />;
}

class HomePage extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      contacts: [],
      // contacts: getContacts(),
      keyword: props.defaultKeyword || "",
    };

    this.onDeleteHandler = this.onDeleteHandler.bind(this);
    this.onKeywordChangeHandler = this.onKeywordChangeHandler.bind(this);
  }

  async componentDidMount() {
    const { data } = await GetContacts();
    this.setState(() => {
      return {
        contacts: data,
      };
    });
  }

  async onDeleteHandler(id) {
    await deleteContact(id);

    const { data } = await GetContacts();
    this.setState(() => {
      return {
        contacts: data,
      };
    });
  }

  onKeywordChangeHandler(keyword) {
    this.setState(() => {
      return {
        keyword,
      };
    });
    this.props.keywordChange(keyword);
  }

  render() {
    const contacts = this.state.contacts.filter((item) => {
      return item.name.toLowerCase().includes(this.state.keyword.toLowerCase());
    });

    return (
      <LocaleConsumer>
        {({ locale }) => {
          return (
            <section>
              <SearchBar keyword={this.state.keyword} keywordChange={this.onKeywordChangeHandler} />
              <h2>{locale === "id" ? "Daftar Kontak" : "Contact List"}</h2>
              <ContactList contacts={contacts} onDelete={this.onDeleteHandler} />
            </section>
          );
        }}
      </LocaleConsumer>
    );
  }
}

// export default HomePage;
