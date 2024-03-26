import { gql } from "@apollo/client";

export const GET_ALL_CLASSES = gql`
  query Classes {
    classes {
      index
      name
    }
  }
`;

export const GET_CHARACTER_INFO = gql`
  query Classes($index: String, $class: StringFilter) {
    class(index: $index) {
      hit_die
      proficiency_choices {
        choose
        desc
      }
      spells {
        level
        index
        name
      }
    }
    features(class: $class) {
      level
      name
      desc
    }
    races {
      index
      name
      subraces {
        name
        index
      }
    }
  }
`;

export const GET_PROF_AND_EQUIP = gql`
  query ProfAndEquip($index: String) {
    class(index: $index) {
      proficiency_choices {
        choose
        desc
        from {
          options {
            ... on ProficiencyReferenceOption {
              item {
                name
                index
              }
            }
            ... on ProficiencyChoiceOption {
              choice {
                desc
                choose
              }
            }
          }
        }
      }
      starting_equipment_options {
        choose
        desc
        from {
          ... on EquipmentOptionSet {
            options {
              ... on CountedReferenceOption {
                of {
                  index
                  name
                }
              }
            }
          }
        }
      }
    }
  }
`;
