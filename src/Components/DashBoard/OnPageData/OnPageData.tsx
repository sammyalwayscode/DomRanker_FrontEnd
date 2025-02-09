import React from "react";
import styled from "styled-components";
import InputComp from "../../../utils/ReusedComp/InputComp";
import EmptyData from "../../../utils/ReusedComp/EmptyData";
import pix from "./undraw_analytics_re_dkf8.svg";
import FirstTable from "./FirstTable";
import SecondTable from "./SecondTable";
import ThirdTable from "./ThirdTable";
import TimmingCard from "./TimmingCard";
import { useMutation, useQuery } from "@tanstack/react-query";
import * as yup from "yup";
import { yupResolver } from "@hookform/resolvers/yup";
import { useForm, SubmitHandler } from "react-hook-form";
import { onPageCall, readingOnPageCall } from "../../../utils/APICalls";
import { useSelector, useDispatch } from "react-redux";
import { onPageAPI } from "../../../utils/stateManagement/authState";

interface userSearch {
	word: string;
}

const OnPageData = () => {
	const [showData, setShowDaat] = React.useState<boolean>(false);
	const user = useSelector((state: any) => state.currentUser);
	const getPageData = useSelector((state: any) => state.onPageData);
	console.log("this is user id", user?._id);
	console.log("this is pageData id", getPageData.id);

	const dispatch = useDispatch();

	const schema = yup.object().shape({
		word: yup.string().required("please enter a searh word"),
	});

	const { register, handleSubmit } = useForm<userSearch>({
		resolver: yupResolver(schema),
	});

	const submit: SubmitHandler<userSearch> = async (data: any) => {
		// console.log("my input data", data)
		onPageCall(data, user?._id).then((data) => {
			console.log("this is the data to check on page", data);
			dispatch(onPageAPI(data?.data[0]));
		});
	};

	const { data, isLoading } = useQuery({
		queryKey: ["gettingOnPageData"],
		queryFn: () => readingOnPageCall(user?._id, getPageData.id),
	});

	console.log("onpageData", data);

	return (
		<Container>
			<Wrapper>
				<Title>OnPage Data</Title>
				<SubTitle>
					With On-Page API you can obtain a variety of on-page SEO data, which
					you can use to eliminate hidden website errors and, consequently,
					boost rankings
				</SubTitle>
				<>
					<InputHold>
						<Main>
							<InputText>Fucntion</InputText>
							<Input placeholder='Summary' />
						</Main>
						<Main>
							<InputText>Include Subdomain</InputText>
							<Input placeholder='Enable' />
						</Main>
						<Main>
							<InputText>Backlink Status Types</InputText>
							<Input placeholder='Live' />
						</Main>
						<Main>
							<InputText>Internal Link List</InputText>
							<Input placeholder='10' />
						</Main>
					</InputHold>
					<Main>
						<InputText>Search Engine Types</InputText>
						<Input2 onSubmit={handleSubmit(submit)}>
							<Input3
								required
								placeholder='Enter search'
								{...register("word")}
							/>
							<Button>Analyze</Button>
							{/* <Error>{errors.keywords && "Keyword is required"}</Error> */}
						</Input2>
					</Main>
				</>

				{showData ? (
					<EmpytyHold>
						<EmptyData avatar={pix} />
					</EmpytyHold>
				) : (
					<>
						<div>
							<Dholder>
								<First>
									<ImageCount>
										<span>Image count</span>
										<div>76</div>
									</ImageCount>
									<ImageSize>
										<span>Image size</span>
										<div>0</div>
									</ImageSize>
								</First>
								<Second>
									<IntLinkCount>
										<span>Internal Link Count</span>
										<div>126</div>
									</IntLinkCount>

									<BothLink>
										<ExLinkCount>
											<span>External Link Count</span>
											<div>92</div>
										</ExLinkCount>

										<InbLinkCount>
											<span>Inbound Link Count</span>
											<div>0</div>
										</InbLinkCount>
									</BothLink>
								</Second>
								<Third>
									<BothLink1>
										<ExLinkCount>
											<span>Script Count</span>
											<div>4</div>
										</ExLinkCount>

										<InbLinkCount>
											<span>Script Size</span>
											<div>23</div>
										</InbLinkCount>
									</BothLink1>

									<BothLink2>
										<ExLinkCount>
											<span>Stylesheet Count</span>
											<div>74</div>
										</ExLinkCount>

										<InbLinkCount>
											<span>Stylesheet Size</span>
											<div>16</div>
										</InbLinkCount>
									</BothLink2>
								</Third>
								<Forth>
									<ImageCount1>
										<span>Title Lenght</span>
										<div>43</div>
									</ImageCount1>
									<ImageSize>
										<span>Description Lenght</span>
										<div>81</div>
									</ImageSize>
								</Forth>
							</Dholder>
						</div>
					</>
				)}

				<TableHolder>
					<FirstTable />
				</TableHolder>

				<TableHolder>
					<SecondTable />
				</TableHolder>
				<TableHolder>
					<ThirdTable />
				</TableHolder>

				<PageT>
					<span>Page Timing</span>
				</PageT>

				<PageContent>
					<TimmingCard />
					<TimmingCard />
					<TimmingCard />
					<TimmingCard />
					<TimmingCard />
					<TimmingCard />
					<TimmingCard />
				</PageContent>
			</Wrapper>
		</Container>
	);
};

export default OnPageData;

const Error = styled.div`
	font-size: 10px;
	color: red;
`;

const PageContent = styled.div`
	height: auto;
	padding-buttom: 20px;
	margin-bottom: 30px;
	width: 95%;
	background-color: white;
	padding-left: 30px;
	padding-top: 30px;
	justify-content: space-between;

	display: flex;
	flex-wrap: wrap;
	@media screen and (max-width: 768px) {
		padding-left: 0px;
	}
`;

const PageT = styled.div`
	height: 50px;
	width: 98%;
	background-color: #ebebec;
	display: flex;
	align-items: center;

	span {
		padding-left: 30px;
		font-size: 15px;
		font-weight: 800;
		color: #000000;
	}
`;

const TableTitle = styled.div`
	heigt: 100px;
	width: 100%;
	padding-top: 5px;
	padding-buttom: 5px;
	font-weight: 700;
	font-size: 15px;
	padding-left: 10px;
`;

const TableHolder = styled.div`
	margin-top: 15px;
	width: 98%;
	display: flex;
	height: auto;
	background-color: white;
	margin-bottom: 20px;
	display: flex;
	flex-direction: column;
	border: 2px solid #bfbfbf;

	@media screen and (max-width: 768px) {
		flex-wrap: wrap;
		width: 90%;
	}
`;

const ExLinkCount = styled.div`
	height: 90px;
	width: 50%;
	display: flex;
	flex-direction: column;
	border-right: 2px solid #e2e2e2;

	span {
		padding-left: 10px;
		padding-top: 10px;
		padding-bottom: 15px;
		font-weight: 700;
		font-size: 13px;
	}

	div {
		padding-left: 10px;

		font-weight: 800;
		font-size: 25px;
	}
`;
const InbLinkCount = styled.div`
	height: 90px;
	width: 50%;
	display: flex;
	flex-direction: column;

	span {
		padding-left: 10px;
		padding-top: 10px;
		padding-bottom: 16px;
		font-weight: 700;
		font-size: 13px;
	}

	div {
		padding-left: 10px;

		font-weight: 800;
		font-size: 25px;
	}
`;

const BothLink1 = styled.div`
	height: 90px;
	width: 100%;
	display: flex;
	background-color: #ffffff;
	border-bottom: 2px solid #e2e2e2;
`;
const BothLink2 = styled.div`
	height: 90px;
	width: 100%;
	display: flex;
	background-color: #ffffff;
	border-bottom: 2px solid #d62828;
`;
const BothLink = styled.div`
	height: 90px;
	width: 100%;
	display: flex;
	background-color: #ffffff;
	border-bottom: 2px solid #023047;
`;

const IntLinkCount = styled.div`
	height: 90px;
	width: 100%;
	border-bottom: 2px solid #e2e2e2;
	background-color: #ffffff;
	display: flex;
	flex-direction: column;

	span {
		padding-left: 10px;
		padding-top: 10px;
		padding-bottom: 15px;
		font-weight: 700;
		font-size: 12px;
	}

	div {
		padding-left: 10px;

		font-weight: 800;
		font-size: 25px;
	}
`;

const ImageCount1 = styled.div`
	height: 90px;
	width: 100%;
	border-bottom: 2px solid #e2e2e2;
	background-color: #ffffff;
	display: flex;
	flex-direction: column;

	span {
		padding-left: 10px;
		padding-top: 10px;
		padding-bottom: 13px;
		font-weight: 700;
		font-size: 13px;
	}

	div {
		padding-left: 10px;

		font-weight: 800;
		font-size: 25px;
	}
`;
const ImageCount = styled.div`
	height: 90px;
	width: 100%;
	border-bottom: 2px solid #8ecae6;
	background-color: #ffffff;
	display: flex;
	flex-direction: column;

	span {
		padding-left: 10px;
		padding-top: 10px;
		padding-bottom: 13px;
		font-weight: 700;
		font-size: 13px;
	}

	div {
		padding-left: 10px;

		font-weight: 800;
		font-size: 25px;
	}
`;
const ImageSize = styled.div`
	height: 90px;
	width: 100%;
	border-bottom: 2px solid #ffb703;
	background-color: #ffffff;

	span {
		padding-left: 10px;
		padding-top: 10px;
		padding-bottom: 15px;
		font-weight: 700;
		font-size: 13px;
	}

	div {
		padding-left: 10px;

		font-weight: 800;
		font-size: 25px;
	}
`;

const First = styled.div`
	width: 190px;
	height: 190px;
	justify-content: space-between;
	display: flex;
	flex-direction: column;

	@media screen and (max-width: 768px) {
		width: 100%;
	}
`;
const Second = styled.div`
	width: 310px;
	height: 190px;

	justify-content: space-between;
	display: flex;
	flex-direction: column;

	@media screen and (max-width: 768px) {
		width: 100%;
	}
`;
const Third = styled.div`
	width: 310px;
	height: 190px;
	justify-content: space-between;
	display: flex;
	flex-direction: column;

	@media screen and (max-width: 768px) {
		width: 100%;
	}
`;
const Forth = styled.div`
	width: 165px;
	height: 190px;

	justify-content: space-between;
	display: flex;
	flex-direction: column;

	@media screen and (max-width: 768px) {
		width: 100%;
	}
`;

const Dholder = styled.div`
	height: auto;
	width: 98%;
	justify-content: space-between;
	display: flex;
	margin-top: 15px;
	flex-wrap: wrap;

	@media screen and (max-width: 768px) {
		width: 90%;
	}
`;

const EmpytyHold = styled.div`
	margin-top: 50px;
`;

const Input3 = styled.input`
	flex: 1;
	padding-left: 10px;
	height: 100%;
	outline: none;
	border: none;
`;
const Input2 = styled.form`
	height: 50px;
	width: 98%;
	background-color: white;
	border: 1px solid #f1f1f1;
	border-radius: 5px;
	display: flex;
	align-items: center;
	overflow: hidden;
	@media screen and (max-width: 768px) {
		width: 90%;
	}
`;
const Button = styled.button`
	margin-right: 10px;
	height: 40px;
	width: 150px;
	color: white;
	border: none;
	outline: none;
	border-radius: 10px;
	cursor: pointer;
	background-color: #ae67fa;
	font-weight: bold;
`;

const Select = styled.select`
	width: 100%;
	height: 40px;
	border-radius: 5px;
	border: 1px solid #f1f1f1;
	outline: none;
	padding-left: 10px;
	margin-right: 10px;
	::placeholder {
		color: gray;
	}
	@media screen and (max-width: 768px) {
		width: 100%;
	}
`;

const InputHold = styled.div`
	margin-top: 15px;
	width: 100%;
	display: flex;

	@media screen and (max-width: 768px) {
		flex-wrap: wrap;
	}
`;
const Main = styled.div`
	width: 100%;
	margin-top: 15px;
	margin-right: 40px;
`;
const Input = styled.input`
	/* min-width: 320px; */
	height: 35px;
	border-radius: 5px;
	border: 1px solid #f1f1f1;
	outline: none;
	padding-left: 10px;
	width: 100%;

	::placeholder {
		color: gray;
	}

	@media screen and (max-width: 768px) {
		width: 96%;
	}
`;
const InputText = styled.div`
	font-size: 13px;
	margin-bottom: 6px;
	/* font-weight: 600; */
`;

const SubTitle = styled.div`
	color: black;
	margin-top: 6px;
	font-weight: 500;
	font-size: 16px;
`;

const Title = styled.div`
	color: #3e4581;
	font-size: 25px;
	font-weight: 800;
`;

const Wrapper = styled.div`
	margin-left: 30px;
	margin-top: 30px;
	width: 90%;
`;

const Container = styled.div`
	width: calc(100vw - 240px);
	min-height: calc(100vh - 60px);
	display: flex;
	overflow: hidden;

	/* justify-content: space-between; */
	/* align-items: center; */
	flex-direction: column;
	background-color: #f8f8ff;
	margin-top: 60px;

	@media screen and (max-width: 768px) {
		width: 100%;
	}
	/* flex-direction: column; */
`;
