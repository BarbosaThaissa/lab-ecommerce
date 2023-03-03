import styled from "styled-components";

export const SidebarContainer = styled.div`
  width: 100%;
  height: 100%;
  position: fixed;
  z-index: 1;
  top: 0;
  right: ${(props) => (props.open === true ? "0" : "-110%")};
  opacity: 1;
  background-color: rgb(255, 255, 255);
  padding: 0 1rem;
  transition: 0.3s;
  transition-property: all;
  transition-timing-function: cubic-bezier(0.4, 0, 0.2, 1);

  @media (min-width: 768px) {
    width: 35vw;
  }

  @media (min-width: 1024px) {
    padding-right: 35px;
    padding-left: 35px;
  }
`;

export const SidebarClose = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  border-bottom-width: 1px;
  padding: 1.5rem 0;
`;

export const CloseText = styled.div`
  font-size: 0.875rem;
  line-height: 1.25rem;
  font-weight: 600;
  text-transform: uppercase;
`;

export const CloseIcon = styled.div`
  height: 2rem;
  width: 2rem;
  display: flex;
  align-items: center;
  justify-content: center;

  & > svg {
    font-size: 1.5rem;
    cursor: pointer;
  }

  & > svg:hover {
    background-color: pink;
    transition: 0.3s;
  }
`;

export const SidebarItens = styled.div`
  display: flex;
  height: 520px;
  flex-direction: column;
  row-gap: 0.5rem;
  border-bottom-width: 1px;
  overflow-x: hidden;
  overflow-y: auto;
`;

export const SidebarTextContainer = styled.div`
  margin-top: 1rem;
  display: flex;
  flex-direction: column;
  row-gap: 0.75rem;
  padding: 1rem 0;
`;

export const SidebarSubContainer = styled.div`
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: space-between;
`;

export const SidebarTotal = styled.div`
  font-weight: 600;
  text-transform: uppercase;

  & > span {
    margin-right: 0.5rem;
  }
`;

export const SidebarTrash = styled.div`
  width: 3rem;
  height: 3rem;
  display: flex;
  cursor: pointer;
  align-items: center;
  justify-content: center;
  background-color: rgb(239, 68, 68);
  padding: 1rem 0;
  font-size: 1.25rem;
  color: white;

  &:hover {
    background-color: pink;
    transition: 0.3s;
  }
`;

// className="flex w-full justify-between items-center"
//
