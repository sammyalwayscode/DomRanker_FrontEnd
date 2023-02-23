import React from 'react'
import styled from 'styled-components'
import {Also} from "./DataContent"

const TableData = () => {


  return (
    <>
    
					<HoldTable>
						<Table>
							<Headrow>
								<TheadCT>
									CID
								</TheadCT>
								<TheadCT>
									Title
								</TheadCT>
								<Thead>
									Rating Type
								</Thead>
								<Thead>
									Rating Value 
								</Thead>
								<TheadL>
									Rating Vote Count
								</TheadL>
							</Headrow>

                            {
                                Also.map((props)=>(
                                    <ContentRow>
                                    <ContentData>
                                        <MainData1>
                                            <a>{props.cid}</a>
                                        </MainData1>
                                    </ContentData>
                                    <ContentData>
                                        <MainData1>
                                        {props.title}
                                        </MainData1>
                                    
                                    </ContentData>
                                    <ContentDataTV>
                                        <MainData>
                                        Max5
                                        </MainData>
                                    </ContentDataTV>
                                    <ContentDataTV>
                                        <MainData>
                                        4.5
                                        </MainData>
                                            
                                    </ContentDataTV>
                                    <ContentData>
                                        <MainData>
                                        {props.ratingVoteCount}
                                        </MainData>
                                            
                                    </ContentData>
                                    
                                </ContentRow>
                                ))
                            }
						

						</Table>
					</HoldTable>
				
     </>
  )
}

export default TableData
const MainData1 = styled.div`
width:100%;
height:45px;

display: flex;
align-items: center;
`

const MainData = styled.div`
width:100%;

height:40px;
display: flex;
justify-content:center;
align-items:center;
`

const TheadCT = styled.th`
width:auto;
height:50%;
padding-left:10px;
padding-right:220px;
border-right:2px solid #E2E2E2;
`
const TheadL = styled.th`
padding-left:10px;
padding-right:30px;
border-right:2px solid #E2E2E2;
`
const Thead = styled.th`
padding-left:10px;
padding-right:20px;
border-right:2px solid #E2E2E2;
`

const ContentDataTV  = styled.td`
width:150px;
height:45px;




`
const ContentData  = styled.td`
width:220px;
height:45px;

padding-left:10px;
`
const ContentRow  = styled.tr`

:nth-child(even) {
    background-color: #FAFAFC;
  }
`

const Headrow = styled.tr`
height:40px;

`

const Table = styled.table`
`
const HoldTable = styled.div`
overflow-x: auto;

@media screen and (max-width:768px){
    width:100%;
}
`