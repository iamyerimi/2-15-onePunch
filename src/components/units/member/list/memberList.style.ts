import styled from "@emotion/styled";
import { Avatar } from "antd";

export const Wrapper = styled.div`
  background-color: #f4f4f4;
  height: calc(100vh - 80px);
  padding: 80px 3vw 160px 3vw; // top, right, bottom, left

  @media (min-height: 601px) and (max-height: 800px) {
    padding-bottom: 160px;
  }

  @media (min-height: 801px) {
    padding-bottom: 0px;
  }
`;

export const AvatarOut = styled(Avatar)``;

export const MembersWrapper = styled.div`
  display: flex;
  flex-direction: column;
  height: 530px; // Adjust this as needed
  overflow-y: auto;
`;

export const Search = styled.input`
  width: 230px;
  height: 25px;
  padding: 4px 16px;
  background-color: white;
  border: 1px solid white;
  border-radius: 10px;
  font-size: 14px;
  &:focus {
    outline: none;
    border: 1px solid #4096ff;
  }
`;

export const MembersBox = styled.div`
  display: flex;
  align-items: center;
  background-color: white;
  padding: 10px 15px;
  margin-top: 1vh;
  border-radius: 4px;
  font-size: 13px;
`;

export const Name = styled.p`
  margin: 0px 10px;
  font-weight: 700;
`;

export const Sex = styled.p`
  margin-right: 10px;
`;

export const Phone = styled.p``;

export const BirthDate = styled.p`
  margin-left: auto;
`;

export const MemberHeader = styled.div`
  display: flex;
  align-items: center;
  padding: 25px 0px 5px 0px;
`;

export const Title = styled.h1`
  font-size: 16px;
  font-weight: 700;
`;

export const MemberCount = styled.p`
  font-size: 16px;
  font-weight: 700;
  color: #2d62ea;
  margin-left: 5px;
`;

export const AddButton = styled.button`
  margin-left: auto;
  font-size: 12px;
  background-color: #fbfbfb;
  padding: 5px 10px;
  border-radius: 10px;
`;

export const PaginationWrapper = styled.div`
  text-align: center;
`;
