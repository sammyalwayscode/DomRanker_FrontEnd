import React, { useState } from "react";
import styled from "styled-components";

const InputComp = () => {
	const [engine, setEngine] = useState("Google");
	const [track, setTrack] = useState("Organic");
	return (
		<>
			<InputHold>
				<Main>
					<InputText>Search Engine Types</InputText>
					<Select
						onChange={(e: any) => {
							setEngine(e.target.value);
						}}>
						<option value='Google'>Google</option>
						<option value='Bing'>Bing</option>
						<option value='Yahoo'>Yahoo</option>
						<option value='Youtube'>Youtube</option>
						<option disabled value='Baidu'>
							Baidu
						</option>
						<option disabled value='Naver'>
							Naver
						</option>
						<option disabled value='Seznam'>
							Seznam
						</option>
					</Select>
				</Main>
				<Main>
					<InputText>Search Engine Track</InputText>
					<Select
						onChange={(e: any) => {
							setTrack(e.target.value);
						}}>
						<option value='Organic'>Organic</option>
						<option value='News'>News</option>
						<option value='Jobs'>Jobs</option>
					</Select>
				</Main>
				{/* <Main>
					<InputText>Search Engine Types</InputText>
					<Input placeholder='Enter search' />

				</Main> */}
			</InputHold>
			<Main>
				<InputText>Search Engine Types</InputText>
				<Input2>
					<Input3 placeholder='Enter search' type='search' />

					{
						// Google
						engine === "Google" && track === "Jobs" ? (
							<Button
								onClick={() => {
									console.log(track, engine);
								}}>
								Analyzing with Google Jobs
							</Button>
						) : engine === "Google" && track === "News" ? (
							<Button
								onClick={() => {
									console.log(track, engine);
								}}>
								Analyzing with Google News
							</Button>
						) : engine === "Google" && track === "Organic" ? (
							<Button
								onClick={() => {
									console.log(track, engine);
								}}>
								Analyzing with Google Organic
							</Button>
						) : // Bing
						engine === "Bing" && track === "Jobs" ? (
							<Button
								onClick={() => {
									console.log(track, engine);
								}}>
								Analyzing with Bing Jobs
							</Button>
						) : engine === "Bing" && track === "News" ? (
							<Button
								onClick={() => {
									console.log(track, engine);
								}}>
								Analyzing with Bing News
							</Button>
						) : engine === "Bing" && track === "Organic" ? (
							<Button
								onClick={() => {
									console.log(track, engine);
								}}>
								Analyzing with Bing Organic
							</Button>
						) : //	Yahoo
						engine === "Yahoo" && track === "Jobs" ? (
							<Button
								onClick={() => {
									console.log(track, engine);
								}}>
								Analyzing with Yahoo Jobs
							</Button>
						) : engine === "Yahoo" && track === "News" ? (
							<Button
								onClick={() => {
									console.log(track, engine);
								}}>
								Analyzing with Yahoo News
							</Button>
						) : engine === "Yahoo" && track === "Organic" ? (
							<Button
								onClick={() => {
									console.log(track, engine);
								}}>
								Analyzing with Yahoo Organic
							</Button>
						) : // Baidu
						engine === "Baidu" && track === "Jobs" ? (
							<Button
								onClick={() => {
									console.log(track, engine);
								}}>
								Analyzing with Baidu Jobs
							</Button>
						) : engine === "Baidu" && track === "News" ? (
							<Button
								onClick={() => {
									console.log(track, engine);
								}}>
								Analyzing with Baidu News
							</Button>
						) : engine === "Baidu" && track === "Organic" ? (
							<Button
								onClick={() => {
									console.log(track, engine);
								}}>
								Analyzing with Baidu Organic
							</Button>
						) : // Naver
						engine === "Naver" && track === "Jobs" ? (
							<Button
								onClick={() => {
									console.log(track, engine);
								}}>
								Analyzing with Naver Jobs
							</Button>
						) : engine === "Naver" && track === "News" ? (
							<Button
								onClick={() => {
									console.log(track, engine);
								}}>
								Analyzing with Naver News
							</Button>
						) : engine === "Naver" && track === "Organic" ? (
							<Button
								onClick={() => {
									console.log(track, engine);
								}}>
								Analyzing with Naver Organic
							</Button>
						) : // Saznam
						engine === "Saznam" && track === "Jobs" ? (
							<Button
								onClick={() => {
									console.log(track, engine);
								}}>
								Analyzing with Saznam Jobs
							</Button>
						) : engine === "Saznam" && track === "News" ? (
							<Button
								onClick={() => {
									console.log(track, engine);
								}}>
								Analyzing with Saznam News
							</Button>
						) : engine === "Saznam" && track === "Organic" ? (
							<Button
								onClick={() => {
									console.log(track, engine);
								}}>
								Analyzing with Saznam Organic
							</Button>
						) : // Youtube
						engine === "Youtube" && track === "Jobs" ? (
							<Button
								onClick={() => {
									console.log(track, engine);
								}}>
								Analyzing with Youtube Jobs
							</Button>
						) : engine === "Youtube" && track === "News" ? (
							<Button
								onClick={() => {
									console.log(track, engine);
								}}>
								Analyzing with Youtube News
							</Button>
						) : engine === "Youtube" && track === "Organic" ? (
							<Button
								onClick={() => {
									console.log(track, engine);
								}}>
								Analyzing with Youtube Organic
							</Button>
						) : null
					}
				</Input2>
			</Main>
		</>
	);

};

export default InputComp;

const Input3 = styled.input`
	flex: 1;
	padding-left: 10px;
	height: 100%;
	outline: none;
	border: none;
	font-family: Montserrat;
`;
const Input2 = styled.div`
	height: 35px;
	width: 98%;
	background-color: white;
	border: 1px solid #e2e2e2;
	border-radius: 2px;
	display: flex;
	align-items: center;
	overflow: hidden;
	@media screen and (max-width: 768px) {
		width: 90%;
	}
`;
const Button = styled.button`
	margin-right: 3px;
	height: 32px;
	width: 150px;
	color: white;
	border: none;
	outline: none;
	border-radius: 2px;
	cursor: pointer;
	background-color: #ae67fa;
	font-weight: 600;
	font-size: 12px;
`;

const Select = styled.select`
	width: 100%;
	height: 35px;
	border-radius: 2px;
	border: 1px solid #e2e2e2;
	font-family: Montserrat;
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
	margin-top: 10px;
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
	font-size: 12px;
	margin-bottom: 3px;
	font-weight: 600;
	/* font-weight: 600; */
`;

const Span = styled.div`
	margin-top: 10px;
	font-weight: 600;
	width: 90%;
`;

const Title = styled.div`
	color: #3e4581;
	font-size: 25px;
	font-weight: 800;
`;
