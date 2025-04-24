import "./App.css";
import Accordion from "./components/accordion";
import LoadMoreData from "./components/load-more-data";
import RandomColor from "./components/random-color";
import StarRating from "./components/star-rating";
import ImageSlider from "./components/image-slider";
import TreeView from "./components/tree-view";
import menus from "./components/tree-view/data";
import QRCodeGenerator from "./components/qr-code-generator";
import LightDarkMode from "./components/light-dark-mode";
import ScrollIndicator from "./components/scroll-indicator";
import TabTest from "./components/custom-tabs/tab-test";
import ModalTest from "./components/custom-modal-popup/modal-test";
import GithubProfileFinder from "./components/github-profile-finder";
import SearchAutocomplete from "./components/search-autocomplete";
import TicTacToe from "./components/tic-tac-toe";
import FeatureFlags from "./components/feature-flag";
import FeatureFlagGlobalState from "./components/feature-flag/context";
import UseFetchHookTest from "./components/use-fetch/test";
import UseOnclickOutsideTest from "./components/use-outside-click/test";
import UseWindowResizeTest from "./components/use-window-resize/test";
import ScrollToTopAndBottom from "./components/scroll-to-top-and-bottom";
import ScrollToSection from "./components/scroll-to-top-and-bottom/scroll-to-section";

export default function App() {
	return (
		<div className="App">
			<Accordion />
			{/* <RandomColor /> */}
			{/* <StarRating /> */}
			{/* <ImageSlider url={"https://picsum.photos/v2/list"} page={"1"} limit={"6"} /> */}
			{/* <LoadMoreData /> */}
			{/* <TreeView menus={menus} /> */}
			{/* <QRCodeGenerator /> */}
			{/* <LightDarkMode /> */}
			{/* <ScrollIndicator url={"https://dummyjson.com/products?limit=100"} /> */}
			{/* <TabTest /> */}
			{/* <ModalTest /> */}
			{/* <GithubProfileFinder /> */}
			{/* <SearchAutocomplete /> */}
			{/* <TicTacToe /> */}
			{/* <FeatureFlagGlobalState><FeatureFlags /></FeatureFlagGlobalState> */}
			{/* <UseFetchHookTest /> */}
			{/* <UseOnclickOutsideTest /> */}
			{/* <UseWindowResizeTest /> */}
			{/* <ScrollToTopAndBottom /> */}
			{/* <ScrollToSection /> */}
		</div>
	);
}
