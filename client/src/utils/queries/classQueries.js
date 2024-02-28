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
