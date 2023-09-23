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
import Greetings from "./components/05-props/01-greetings";
import Children from "./components/05-props/04-children";
import DijitalSaatUygulamasi2 from "./components/06-dijital-saat-uygulamasi2/06-dijital-saat-uygulamasi2";
import Image from "./components/07-images/01-image";
import ImageGallery from "./components/07-images/02-image-gallery";
import ProfileCard from "./components/08-profile-card/profile-card";
import BootstrapKlasikYontem from "./components/09-bootstrap/01-bootstrap-klasik-yontem";
import BootstrapComponents from "./components/09-bootstrap/02-bootstrap-components";
import BootstrapButton from "./components/09-bootstrap/03-bootstrap-button";
import ReactIcons from "./components/10-icons/01-react-icons";
import MaterialIcons from "./components/10-icons/02-material-icons";
import Events from "./components/11-events/events";
import ProductShop from "./components/12-product-shop/product-shop";
import State from "./components/13-usestate/state";
import Counter from "./components/14-counter/counter";

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
            <Greetings />
            <Children>
                Lorem ipsum dolor sit, amet consectetur adipisicing elit. Temporibus nesciunt eos facere et repellendus quasi ipsam ab tempore earum porro saepe sapiente nemo asperiores, cupiditate nobis officiis modi, quas minus!
            </Children>
            <DijitalSaatUygulamasi2 color="white" backgroundColor="red" />
            <Image />
            <ImageGallery />
            {/* TODO: render konusunda array'lerin component disinda kalmasi gerektiginde tekrardan duzenlenecek */}
            <ProfileCard
                src="profile-card.jpg"
                name="Walker"
                location="Nashville, Tenesse"
                statistics={
                    [
                        {
                            stat: 2,
                            title: "Shot"
                        },
                        {
                            stat: 300,
                            title: "Followers"
                        },
                        {
                            stat: 150,
                            title: "Following"
                        }
                    ]
                }
            />
            <ProfileCard
                src="profile.jpg"
                name="Zisan"
                location="Istanbul, Turkey"
                statistics={
                    [
                        {
                            stat: 8,
                            title: "Shot"
                        },
                        {
                            stat: 1000,
                            title: "Followers"
                        },
                        {
                            stat: 50,
                            title: "Following"
                        }
                    ]
                }
            />
            <BootstrapKlasikYontem />
            <BootstrapComponents />
            <BootstrapButton variant="outline-primary" disabled />
            <ReactIcons />
            <MaterialIcons />
            <Events />
            <ProductShop />
            <State />
            <Counter />
        </div>
    )
};

export default App;