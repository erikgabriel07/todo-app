import styled from 'styled-components/native';

export const Container = styled.TouchableOpacity`
    background-color: ${({primary}) => primary ? "#FA8240": "#FFF"};
    border-color: #FA8240;
    border-width: 1px;
    border-radius: 12px;
    padding: 14px 24px;
    justify-content: center;
    align-items: center;
`;