import type { ImageSourcePropType } from 'react-native';
import { Image, View } from 'react-native';

import CustomContainer from '../../CustomContainer/CustomContainer';
import CustomText from '../../CustomText/CustomText';

import { styles } from './styles';

interface CardContentProps {
  isRoleVisible: boolean;
  roleTitle: string;
  characterSource: ImageSourcePropType;
  roleDescription: string;
  isCop: boolean;
  location: string | null;
  keyword: string | null;
}

const CardContent = ({
  isRoleVisible,
  roleTitle,
  characterSource,
  roleDescription,
  isCop,
  location,
  keyword,
}: CardContentProps) => {
  if (!isRoleVisible) {
    return (
      <CustomContainer variant="yellow" extraStyle={styles.tapWrapper}>
        <CustomText extraStyle={styles.tapText}>Tap to show role</CustomText>
      </CustomContainer>
    );
  }

  const RoleIcon = isCop ? (
    <CustomText extraStyle={styles.roleIcon}>👮‍♂️</CustomText>
  ) : (
    <CustomText extraStyle={styles.roleIcon}>🕶️</CustomText>
  );

  return (
    <>
      <View style={styles.roleTitleRow}>
        <CustomText extraStyle={styles.roleTitle}>{roleTitle}</CustomText>
        {RoleIcon}
      </View>

      <Image
        source={characterSource}
        style={styles.characterImage}
        resizeMode="contain"
      />

      <CustomText extraStyle={styles.roleDescription}>
        {roleDescription}
      </CustomText>

      {isCop && (
        <View style={styles.infoContainer}>
          <CustomContainer variant="yellow" extraStyle={styles.infoRow}>
            <CustomText extraStyle={styles.infoText}>
              📍 Location: {location}
            </CustomText>
          </CustomContainer>

          <CustomContainer variant="yellow" extraStyle={styles.infoRow}>
            <CustomText extraStyle={styles.infoText}>
              🧩 Keyword: {keyword}
            </CustomText>
          </CustomContainer>
        </View>
      )}
    </>
  );
};

export default CardContent;
