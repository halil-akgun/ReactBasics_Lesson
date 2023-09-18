import X from "./components/01-my-house/01-my-house";
import { Armutlar, Muzlar } from "./components/01-my-house/01-my-house";
import Jsx1 from "./components/02-jsx/01-jsx";
import Jsx2 from "./components/02-jsx/02-jsx";
import Jsx3 from "./components/02-jsx/03-jsx";
import Jsx4 from "./components/02-jsx/04-jsx";
import InlineStyling from "./components/03-styles/01-inline-styling";
import InternalStyling from "./components/03-styles/02-internal-styling";
import ExternalStyling from "./components/03-styles/03-external-styling";
import ModuleStyling from "./components/03-styles/04-module-styling";
import Sass from "./components/03-styles/05-sass";
import DijitalSaatUygulamasi1 from "./components/04-dijital-saat-uygulamasi1/04-dijital-saat-uygulamasi1";

const App = () => {
    return (
        <div>
            <X />
            <Armutlar />
            <Muzlar />
            <Jsx1 />
            <Jsx2 />
            <Jsx3 />
            <Jsx4 />
            <InlineStyling />
            <InternalStyling />
            <ExternalStyling />
            <ModuleStyling />
            <Sass />
            <DijitalSaatUygulamasi1 />
        </div>
    )
};

export default App;