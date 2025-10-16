import styled from 'styled-components/native';

export const Container = styled.TouchableOpacity`
    background-color: ${({ primary, disabled }) => disabled ? '#999' : primary ? '#FA8240' : '#FFF'};
    border-color: ${({ disabled }) => disabled ? '#999' : '#FA8240'};
    border-width: 1px;
    border-radius: 12px;
    padding: 14px 24px;
    justify-content: center;
    align-items: center;
`;